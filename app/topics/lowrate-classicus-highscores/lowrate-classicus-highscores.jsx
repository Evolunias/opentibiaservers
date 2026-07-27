import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-highscores');
}

export default function LowrateClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-highscores" />;
}
