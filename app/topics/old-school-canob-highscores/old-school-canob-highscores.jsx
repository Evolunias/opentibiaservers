import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-highscores');
}

export default function OldSchoolCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-highscores" />;
}
