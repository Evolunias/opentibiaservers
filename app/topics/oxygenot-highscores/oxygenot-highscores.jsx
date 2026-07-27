import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-highscores');
}

export default function OxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-highscores" />;
}
