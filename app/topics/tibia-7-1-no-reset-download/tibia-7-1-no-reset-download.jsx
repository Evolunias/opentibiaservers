import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-download');
}

export default function Tibia71NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-download" />;
}
