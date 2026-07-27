import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-highscores');
}

export default function ActiveNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-highscores" />;
}
