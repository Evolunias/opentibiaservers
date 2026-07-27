import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-enforced-server-north-america');
}

export default function CalmeraOtPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-enforced-server-north-america" />;
}
