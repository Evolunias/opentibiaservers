import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-download');
}

export default function NewClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-download" />;
}
