import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-highscores');
}

export default function ActiveSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-highscores" />;
}
