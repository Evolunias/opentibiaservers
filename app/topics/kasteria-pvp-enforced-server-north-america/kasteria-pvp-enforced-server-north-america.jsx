import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-north-america');
}

export default function KasteriaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-north-america" />;
}
