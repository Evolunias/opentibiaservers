import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-download');
}

export default function NewSeasonAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-download" />;
}
