import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-highscores');
}

export default function TopBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-highscores" />;
}
