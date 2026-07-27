import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-highscores');
}

export default function ValoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="valoria-highscores" />;
}
