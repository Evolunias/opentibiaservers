import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-download');
}

export default function Tibia12NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-download" />;
}
