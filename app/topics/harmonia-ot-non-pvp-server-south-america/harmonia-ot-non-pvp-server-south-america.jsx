import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-south-america');
}

export default function HarmoniaOtNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-south-america" />;
}
