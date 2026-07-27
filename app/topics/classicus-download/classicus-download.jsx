import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-download');
}

export default function ClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="classicus-download" />;
}
