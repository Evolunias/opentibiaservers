import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-download');
}

export default function Tibia854SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-download" />;
}
