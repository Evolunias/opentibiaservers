import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-download');
}

export default function NoResetRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-download" />;
}
