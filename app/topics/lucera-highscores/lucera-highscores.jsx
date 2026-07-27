import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-highscores');
}

export default function LuceraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lucera-highscores" />;
}
