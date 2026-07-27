import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-highscores');
}

export default function OldSchoolMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-highscores" />;
}
