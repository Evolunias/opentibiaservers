import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-highscores');
}

export default function NewSeasonArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-highscores" />;
}
