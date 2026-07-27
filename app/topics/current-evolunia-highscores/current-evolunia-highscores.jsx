import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-highscores');
}

export default function CurrentEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-highscores" />;
}
