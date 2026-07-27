import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-highscores');
}

export default function OldSchoolThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-highscores" />;
}
