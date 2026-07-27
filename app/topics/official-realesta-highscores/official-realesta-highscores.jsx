import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-highscores');
}

export default function OfficialRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-highscores" />;
}
