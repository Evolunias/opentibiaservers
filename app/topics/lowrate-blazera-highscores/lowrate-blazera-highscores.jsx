import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-highscores');
}

export default function LowrateBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-highscores" />;
}
