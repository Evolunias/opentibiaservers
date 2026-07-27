import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-highscores');
}

export default function OldSchoolEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-highscores" />;
}
