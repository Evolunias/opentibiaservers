import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-highscores');
}

export default function CustomNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-highscores" />;
}
