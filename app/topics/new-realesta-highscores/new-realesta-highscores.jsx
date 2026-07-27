import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-highscores');
}

export default function NewRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-highscores" />;
}
