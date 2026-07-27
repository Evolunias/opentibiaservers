import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-highscores');
}

export default function LowrateCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-highscores" />;
}
