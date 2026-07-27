import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-highscores');
}

export default function NewThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-highscores" />;
}
