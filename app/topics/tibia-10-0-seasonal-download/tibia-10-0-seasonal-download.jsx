import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-download');
}

export default function Tibia100SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-download" />;
}
