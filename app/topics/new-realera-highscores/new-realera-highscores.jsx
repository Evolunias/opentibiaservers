import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-highscores');
}

export default function NewRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-realera-highscores" />;
}
