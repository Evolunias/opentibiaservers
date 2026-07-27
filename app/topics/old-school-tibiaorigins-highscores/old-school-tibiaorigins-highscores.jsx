import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-highscores');
}

export default function OldSchoolTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-highscores" />;
}
