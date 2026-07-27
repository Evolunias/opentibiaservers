import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-highscores');
}

export default function GuardiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="guardia-highscores" />;
}
