import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-miracle-server');
}

export default function LowExpMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-miracle-server" />;
}
