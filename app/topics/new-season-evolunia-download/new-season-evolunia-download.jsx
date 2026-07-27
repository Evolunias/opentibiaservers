import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-download');
}

export default function NewSeasonEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-download" />;
}
