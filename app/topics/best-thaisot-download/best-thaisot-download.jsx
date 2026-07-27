import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-download');
}

export default function BestThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-download" />;
}
