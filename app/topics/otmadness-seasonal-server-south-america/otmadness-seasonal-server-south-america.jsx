import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-south-america');
}

export default function OtmadnessSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-south-america" />;
}
