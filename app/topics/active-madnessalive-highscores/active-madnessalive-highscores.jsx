import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-highscores');
}

export default function ActiveMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-highscores" />;
}
