import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-highscores');
}

export default function PopularXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-highscores" />;
}
