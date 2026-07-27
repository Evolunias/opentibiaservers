import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-download');
}

export default function NewEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-download" />;
}
