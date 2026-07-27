import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-highscores');
}

export default function ActiveBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-highscores" />;
}
