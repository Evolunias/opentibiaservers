import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-highscores');
}

export default function PopularOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-highscores" />;
}
