import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-download');
}

export default function EvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="evolera-download" />;
}
