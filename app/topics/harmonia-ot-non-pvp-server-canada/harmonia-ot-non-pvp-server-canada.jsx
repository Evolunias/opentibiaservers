import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-canada');
}

export default function HarmoniaOtNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-canada" />;
}
