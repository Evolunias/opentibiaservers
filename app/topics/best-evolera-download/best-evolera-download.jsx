import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-download');
}

export default function BestEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-download" />;
}
