import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-highscores');
}

export default function NewEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-highscores" />;
}
