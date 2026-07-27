import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-highscores');
}

export default function SabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-highscores" />;
}
