import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-miracle-server');
}

export default function HighExpMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-miracle-server" />;
}
