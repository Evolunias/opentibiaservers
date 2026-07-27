import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-download');
}

export default function CurrentEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-download" />;
}
