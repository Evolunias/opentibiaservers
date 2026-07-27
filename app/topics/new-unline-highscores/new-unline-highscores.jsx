import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-highscores');
}

export default function NewUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-unline-highscores" />;
}
