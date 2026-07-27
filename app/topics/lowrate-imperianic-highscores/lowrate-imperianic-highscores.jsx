import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-highscores');
}

export default function LowrateImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-highscores" />;
}
