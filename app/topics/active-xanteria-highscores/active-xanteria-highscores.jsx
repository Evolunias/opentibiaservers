import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-highscores');
}

export default function ActiveXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-highscores" />;
}
