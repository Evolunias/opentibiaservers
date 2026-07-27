import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-highscores');
}

export default function LowrateXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-highscores" />;
}
