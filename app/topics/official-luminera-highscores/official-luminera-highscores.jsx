import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-highscores');
}

export default function OfficialLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-highscores" />;
}
