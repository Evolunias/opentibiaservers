import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-highscores');
}

export default function ActiveRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-realera-highscores" />;
}
