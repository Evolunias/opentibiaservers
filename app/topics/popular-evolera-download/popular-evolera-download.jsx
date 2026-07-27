import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-download');
}

export default function PopularEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-download" />;
}
