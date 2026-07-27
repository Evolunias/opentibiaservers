import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-latin-america');
}

export default function KasteriaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-latin-america" />;
}
