import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-non-pvp');
}

export default function EvoServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="evo-server-non-pvp" />;
}
