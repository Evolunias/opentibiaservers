import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-highscores');
}

export default function NewEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-highscores" />;
}
