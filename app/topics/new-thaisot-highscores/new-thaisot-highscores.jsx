import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-highscores');
}

export default function NewThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-highscores" />;
}
