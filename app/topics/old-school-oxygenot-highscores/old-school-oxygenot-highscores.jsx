import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-highscores');
}

export default function OldSchoolOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-highscores" />;
}
