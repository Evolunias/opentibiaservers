import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-download');
}

export default function Tibia13NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-download" />;
}
