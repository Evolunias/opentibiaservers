import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-sweden');
}

export default function CalmeraOtSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-sweden" />;
}
