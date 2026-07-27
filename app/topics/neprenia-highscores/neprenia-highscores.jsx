import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-highscores');
}

export default function NepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="neprenia-highscores" />;
}
