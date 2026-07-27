import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-north-america');
}

export default function CalmeraOtNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-north-america" />;
}
