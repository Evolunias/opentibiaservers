import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-highscores');
}

export default function CustomSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-highscores" />;
}
