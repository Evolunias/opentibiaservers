import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-highscores');
}

export default function NewSeasonXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-highscores" />;
}
