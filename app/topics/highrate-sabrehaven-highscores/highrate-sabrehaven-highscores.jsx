import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-highscores');
}

export default function HighrateSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-highscores" />;
}
