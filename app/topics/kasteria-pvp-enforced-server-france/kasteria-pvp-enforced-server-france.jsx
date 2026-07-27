import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-france');
}

export default function KasteriaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-france" />;
}
