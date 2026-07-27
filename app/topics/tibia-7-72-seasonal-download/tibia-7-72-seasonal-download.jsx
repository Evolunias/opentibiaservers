import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-download');
}

export default function Tibia772SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-download" />;
}
