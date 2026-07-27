import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-highscores');
}

export default function OldSchoolCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-highscores" />;
}
