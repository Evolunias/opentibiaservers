import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-highscores');
}

export default function ActiveOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-highscores" />;
}
