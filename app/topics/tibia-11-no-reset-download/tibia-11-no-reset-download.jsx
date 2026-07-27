import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-download');
}

export default function Tibia11NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-download" />;
}
