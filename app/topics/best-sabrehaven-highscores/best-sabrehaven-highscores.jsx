import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-highscores');
}

export default function BestSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-highscores" />;
}
