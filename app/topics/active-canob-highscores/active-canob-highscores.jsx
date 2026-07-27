import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-highscores');
}

export default function ActiveCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-canob-highscores" />;
}
