import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-highscores');
}

export default function OldSchoolTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-highscores" />;
}
