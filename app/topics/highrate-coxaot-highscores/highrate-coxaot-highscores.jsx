import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-highscores');
}

export default function HighrateCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-highscores" />;
}
