import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-high-exp-server');
}

export default function Originaltibia84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-high-exp-server" />;
}
