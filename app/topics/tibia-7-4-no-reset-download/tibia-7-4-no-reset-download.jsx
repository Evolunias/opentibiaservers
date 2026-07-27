import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-no-reset-download');
}

export default function Tibia74NoResetDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-no-reset-download" />;
}
