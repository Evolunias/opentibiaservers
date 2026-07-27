import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-download');
}

export default function NewSeasonDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-download" />;
}
