import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-download');
}

export default function CustomEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-download" />;
}
