import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-high-exp-server');
}

export default function Originaltibia772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-high-exp-server" />;
}
