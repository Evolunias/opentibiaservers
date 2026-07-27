import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-download');
}

export default function FreshStartThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-download" />;
}
