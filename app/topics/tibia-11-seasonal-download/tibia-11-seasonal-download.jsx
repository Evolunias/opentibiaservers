import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-download');
}

export default function Tibia11SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-download" />;
}
