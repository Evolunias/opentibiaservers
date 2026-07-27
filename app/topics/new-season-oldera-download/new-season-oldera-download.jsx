import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-download');
}

export default function NewSeasonOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-download" />;
}
