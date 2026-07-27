import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-highscores');
}

export default function OldSchoolDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-highscores" />;
}
