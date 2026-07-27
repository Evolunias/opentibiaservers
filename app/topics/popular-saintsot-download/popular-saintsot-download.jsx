import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-download');
}

export default function PopularSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-download" />;
}
