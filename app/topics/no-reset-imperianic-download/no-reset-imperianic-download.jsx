import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-download');
}

export default function NoResetImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-download" />;
}
