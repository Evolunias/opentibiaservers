import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-highscores');
}

export default function OldSchoolThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-highscores" />;
}
