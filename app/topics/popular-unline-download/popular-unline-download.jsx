import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-download');
}

export default function PopularUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-download" />;
}
