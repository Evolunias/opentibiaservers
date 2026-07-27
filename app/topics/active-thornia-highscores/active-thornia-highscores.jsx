import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-highscores');
}

export default function ActiveThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-highscores" />;
}
