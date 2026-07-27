import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-highscores');
}

export default function NewSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-highscores" />;
}
