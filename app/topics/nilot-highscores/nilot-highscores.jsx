import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-highscores');
}

export default function NilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="nilot-highscores" />;
}
