import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-miracle-server');
}

export default function EvoMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="evo-miracle-server" />;
}
