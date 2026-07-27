import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-highscores');
}

export default function FreshStartEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-highscores" />;
}
