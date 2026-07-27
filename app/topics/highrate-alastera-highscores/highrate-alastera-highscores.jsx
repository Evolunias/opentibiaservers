import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-highscores');
}

export default function HighrateAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-highscores" />;
}
