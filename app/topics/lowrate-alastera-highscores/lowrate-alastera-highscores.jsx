import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-highscores');
}

export default function LowrateAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-highscores" />;
}
