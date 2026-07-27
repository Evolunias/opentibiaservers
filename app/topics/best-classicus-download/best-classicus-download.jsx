import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-download');
}

export default function BestClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-download" />;
}
