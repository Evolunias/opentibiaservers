import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-highscores');
}

export default function CustomEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-highscores" />;
}
