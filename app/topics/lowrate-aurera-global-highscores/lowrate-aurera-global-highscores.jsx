import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-highscores');
}

export default function LowrateAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-highscores" />;
}
