import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-highscores');
}

export default function OldSchoolArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-highscores" />;
}
