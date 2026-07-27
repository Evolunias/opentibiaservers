import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-highscores');
}

export default function ActiveEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-highscores" />;
}
