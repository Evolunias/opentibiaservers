import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-highscores');
}

export default function OldSchoolSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-highscores" />;
}
