import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-highscores');
}

export default function MadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-highscores" />;
}
