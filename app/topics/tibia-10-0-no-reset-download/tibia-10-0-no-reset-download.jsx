import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-no-reset-download');
}

export default function Tibia100NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-no-reset-download" />;
}
