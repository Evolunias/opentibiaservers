import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-download');
}

export default function Tibia14NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-download" />;
}
