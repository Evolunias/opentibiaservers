import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-download');
}

export default function Tibia15SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-download" />;
}
