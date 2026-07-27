import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-highscores');
}

export default function OldSchoolLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-highscores" />;
}
