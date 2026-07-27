import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-high-exp-server');
}

export default function Originaltibia96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-high-exp-server" />;
}
