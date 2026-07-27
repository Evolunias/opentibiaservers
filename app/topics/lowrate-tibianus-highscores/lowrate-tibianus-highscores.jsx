import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-highscores');
}

export default function LowrateTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-highscores" />;
}
