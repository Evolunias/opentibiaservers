import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-highscores');
}

export default function CustomBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-highscores" />;
}
