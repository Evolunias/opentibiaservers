import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-highscores');
}

export default function TopTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-highscores" />;
}
