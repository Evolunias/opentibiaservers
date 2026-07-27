import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-download');
}

export default function FreshStartEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-download" />;
}
