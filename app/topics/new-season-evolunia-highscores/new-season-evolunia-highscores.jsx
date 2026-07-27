import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-highscores');
}

export default function NewSeasonEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-highscores" />;
}
