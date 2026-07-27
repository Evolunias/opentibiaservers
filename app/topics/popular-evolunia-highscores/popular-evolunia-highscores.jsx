import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-highscores');
}

export default function PopularEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-highscores" />;
}
