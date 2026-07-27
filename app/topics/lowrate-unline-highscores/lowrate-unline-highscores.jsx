import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-highscores');
}

export default function LowrateUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-highscores" />;
}
