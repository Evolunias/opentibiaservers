import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-highscores');
}

export default function OfficialUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-unline-highscores" />;
}
