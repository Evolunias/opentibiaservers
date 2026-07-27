import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-highscores');
}

export default function OldSchoolDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-highscores" />;
}
