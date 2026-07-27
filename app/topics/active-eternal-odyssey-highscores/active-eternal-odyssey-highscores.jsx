import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-highscores');
}

export default function ActiveEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-highscores" />;
}
