import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-download');
}

export default function Tibia81SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-download" />;
}
