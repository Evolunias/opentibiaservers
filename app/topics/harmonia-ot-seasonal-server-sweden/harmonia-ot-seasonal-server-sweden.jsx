import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-sweden');
}

export default function HarmoniaOtSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-sweden" />;
}
