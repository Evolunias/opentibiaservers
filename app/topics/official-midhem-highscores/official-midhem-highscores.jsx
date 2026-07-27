import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-highscores');
}

export default function OfficialMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-highscores" />;
}
