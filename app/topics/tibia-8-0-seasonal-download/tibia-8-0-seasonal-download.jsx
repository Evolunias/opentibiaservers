import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-download');
}

export default function Tibia80SeasonalDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-download" />;
}
