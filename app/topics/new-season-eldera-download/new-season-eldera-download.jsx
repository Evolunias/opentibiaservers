import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-download');
}

export default function NewSeasonElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-download" />;
}
