import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-highscores');
}

export default function ActiveNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-highscores" />;
}
