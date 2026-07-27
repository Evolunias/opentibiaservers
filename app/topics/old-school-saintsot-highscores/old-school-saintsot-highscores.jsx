import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-highscores');
}

export default function OldSchoolSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-highscores" />;
}
