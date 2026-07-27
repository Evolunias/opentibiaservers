import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-highscores');
}

export default function CustomXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-highscores" />;
}
