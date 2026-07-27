import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-highscores');
}

export default function TopEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-highscores" />;
}
