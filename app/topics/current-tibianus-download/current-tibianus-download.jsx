import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-download');
}

export default function CurrentTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-download" />;
}
