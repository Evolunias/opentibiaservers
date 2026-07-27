import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-highscores');
}

export default function QuinteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="quintera-highscores" />;
}
