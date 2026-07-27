import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-highscores');
}

export default function NewXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-highscores" />;
}
