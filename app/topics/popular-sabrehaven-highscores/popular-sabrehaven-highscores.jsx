import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-highscores');
}

export default function PopularSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-highscores" />;
}
