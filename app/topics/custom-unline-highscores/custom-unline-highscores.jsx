import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-highscores');
}

export default function CustomUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-highscores" />;
}
