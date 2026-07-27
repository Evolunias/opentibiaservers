import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-highscores');
}

export default function BestEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-highscores" />;
}
