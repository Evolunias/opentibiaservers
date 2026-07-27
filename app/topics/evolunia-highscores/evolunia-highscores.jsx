import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-highscores');
}

export default function EvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="evolunia-highscores" />;
}
