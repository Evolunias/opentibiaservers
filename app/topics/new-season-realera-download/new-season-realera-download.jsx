import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-download');
}

export default function NewSeasonRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-download" />;
}
