import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-south-america');
}

export default function CalmeraOtNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-south-america" />;
}
