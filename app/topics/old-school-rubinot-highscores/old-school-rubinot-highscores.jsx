import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-highscores');
}

export default function OldSchoolRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-highscores" />;
}
