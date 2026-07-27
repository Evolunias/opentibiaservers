import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-highscores');
}

export default function OldSchoolEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-highscores" />;
}
