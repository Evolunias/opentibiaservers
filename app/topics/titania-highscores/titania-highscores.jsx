import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-highscores');
}

export default function TitaniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="titania-highscores" />;
}
