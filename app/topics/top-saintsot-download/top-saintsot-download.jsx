import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-download');
}

export default function TopSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-download" />;
}
