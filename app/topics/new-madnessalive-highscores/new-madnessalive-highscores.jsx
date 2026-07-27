import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-highscores');
}

export default function NewMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-highscores" />;
}
