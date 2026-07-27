import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-highscores');
}

export default function NewBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-highscores" />;
}
