import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-highscores');
}

export default function NewTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-highscores" />;
}
