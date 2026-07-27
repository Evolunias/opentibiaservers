import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-download');
}

export default function Tibia96SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-download" />;
}
