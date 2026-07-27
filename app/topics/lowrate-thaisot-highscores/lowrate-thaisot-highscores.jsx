import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-highscores');
}

export default function LowrateThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-highscores" />;
}
