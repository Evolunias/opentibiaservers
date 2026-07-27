import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-download');
}

export default function NoResetTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-download" />;
}
