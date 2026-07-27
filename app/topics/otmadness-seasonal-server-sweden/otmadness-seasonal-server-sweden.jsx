import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-sweden');
}

export default function OtmadnessSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-sweden" />;
}
