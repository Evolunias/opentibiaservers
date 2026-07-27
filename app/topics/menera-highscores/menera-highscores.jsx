import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-highscores');
}

export default function MeneraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="menera-highscores" />;
}
