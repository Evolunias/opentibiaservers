import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-download');
}

export default function NewSeasonNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-download" />;
}
