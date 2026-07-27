import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-highscores');
}

export default function OfficialCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-highscores" />;
}
