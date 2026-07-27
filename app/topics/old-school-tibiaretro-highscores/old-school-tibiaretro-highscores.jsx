import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-highscores');
}

export default function OldSchoolTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-highscores" />;
}
