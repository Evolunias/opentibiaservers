import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-highscores');
}

export default function NovaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="nova-highscores" />;
}
