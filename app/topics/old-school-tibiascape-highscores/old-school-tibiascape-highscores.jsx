import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-highscores');
}

export default function OldSchoolTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-highscores" />;
}
