import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-high-exp-server');
}

export default function Originaltibia15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-high-exp-server" />;
}
