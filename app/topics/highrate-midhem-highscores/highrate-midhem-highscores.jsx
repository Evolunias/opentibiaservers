import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-highscores');
}

export default function HighrateMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-highscores" />;
}
