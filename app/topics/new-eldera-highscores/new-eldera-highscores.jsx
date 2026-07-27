import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-highscores');
}

export default function NewElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-highscores" />;
}
