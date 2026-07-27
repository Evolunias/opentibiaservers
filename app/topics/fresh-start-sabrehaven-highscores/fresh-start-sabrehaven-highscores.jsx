import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-highscores');
}

export default function FreshStartSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-highscores" />;
}
