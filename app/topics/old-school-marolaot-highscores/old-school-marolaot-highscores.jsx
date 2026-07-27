import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-highscores');
}

export default function OldSchoolMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-highscores" />;
}
