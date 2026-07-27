import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-download');
}

export default function ActiveEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-download" />;
}
