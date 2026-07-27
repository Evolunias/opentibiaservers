import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-highscores');
}

export default function ActiveRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-highscores" />;
}
