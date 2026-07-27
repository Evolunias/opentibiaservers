import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-download');
}

export default function NewSeasonYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-download" />;
}
