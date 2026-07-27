import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-highscores');
}

export default function CustomOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-highscores" />;
}
