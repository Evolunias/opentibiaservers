import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-download');
}

export default function Tibia96NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-download" />;
}
