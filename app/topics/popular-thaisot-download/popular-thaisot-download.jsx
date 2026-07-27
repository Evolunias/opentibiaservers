import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-download');
}

export default function PopularThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-download" />;
}
