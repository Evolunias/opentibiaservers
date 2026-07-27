import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-high-exp-server');
}

export default function Originaltibia100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-high-exp-server" />;
}
