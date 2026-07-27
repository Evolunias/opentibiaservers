import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-highscores');
}

export default function OldSchoolCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-highscores" />;
}
