import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-highscores');
}

export default function FreshStartTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-highscores" />;
}
