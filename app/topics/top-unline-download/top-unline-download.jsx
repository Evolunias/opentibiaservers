import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-download');
}

export default function TopUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-unline-download" />;
}
