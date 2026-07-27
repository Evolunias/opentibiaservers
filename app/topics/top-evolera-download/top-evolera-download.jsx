import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-download');
}

export default function TopEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-download" />;
}
