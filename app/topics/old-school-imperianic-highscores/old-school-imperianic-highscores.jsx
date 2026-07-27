import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-highscores');
}

export default function OldSchoolImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-highscores" />;
}
