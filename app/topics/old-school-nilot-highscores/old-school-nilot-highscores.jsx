import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-highscores');
}

export default function OldSchoolNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-highscores" />;
}
