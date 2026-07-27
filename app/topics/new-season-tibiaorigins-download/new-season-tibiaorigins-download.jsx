import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-download');
}

export default function NewSeasonTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-download" />;
}
