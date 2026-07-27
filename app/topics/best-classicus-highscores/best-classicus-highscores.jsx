import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-highscores');
}

export default function BestClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-highscores" />;
}
