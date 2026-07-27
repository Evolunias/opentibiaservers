import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-highscores');
}

export default function CustomEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-highscores" />;
}
