import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-highscores');
}

export default function NewSeasonMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-highscores" />;
}
