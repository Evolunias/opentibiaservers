import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-enforced-server-france');
}

export default function CalmeraOtPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-enforced-server-france" />;
}
