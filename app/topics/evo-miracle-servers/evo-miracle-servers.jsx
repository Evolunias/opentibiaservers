import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-miracle-servers');
}

export default function EvoMiracleServersKeywordPage() {
  return <StaticKeywordPage slug="evo-miracle-servers" />;
}
