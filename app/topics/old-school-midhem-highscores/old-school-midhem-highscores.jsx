import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-highscores');
}

export default function OldSchoolMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-highscores" />;
}
