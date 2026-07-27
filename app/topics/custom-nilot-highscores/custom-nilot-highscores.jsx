import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-highscores');
}

export default function CustomNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-highscores" />;
}
