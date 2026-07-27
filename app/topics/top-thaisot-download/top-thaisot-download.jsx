import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-download');
}

export default function TopThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-download" />;
}
