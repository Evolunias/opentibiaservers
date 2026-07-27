import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-download');
}

export default function Tibia13SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-download" />;
}
