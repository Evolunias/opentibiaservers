import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-highscores');
}

export default function HighrateMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-highscores" />;
}
