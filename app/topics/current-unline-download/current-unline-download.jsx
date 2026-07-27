import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-download');
}

export default function CurrentUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-unline-download" />;
}
