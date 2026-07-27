import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-download');
}

export default function NewSeasonRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-download" />;
}
