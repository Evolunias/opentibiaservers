import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-download');
}

export default function NewSeasonTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-download" />;
}
