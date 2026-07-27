import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-south-america');
}

export default function CalmeraOtPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-south-america" />;
}
