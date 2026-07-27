import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-download');
}

export default function ThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="thaisot-download" />;
}
