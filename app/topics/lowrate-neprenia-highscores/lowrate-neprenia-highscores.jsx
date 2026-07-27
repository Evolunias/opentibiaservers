import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-highscores');
}

export default function LowrateNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-highscores" />;
}
