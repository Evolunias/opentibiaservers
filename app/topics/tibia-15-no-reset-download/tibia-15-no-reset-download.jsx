import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-download');
}

export default function Tibia15NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-download" />;
}
