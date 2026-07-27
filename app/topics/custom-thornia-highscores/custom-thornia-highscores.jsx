import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-highscores');
}

export default function CustomThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-highscores" />;
}
