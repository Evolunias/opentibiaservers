import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-highscores');
}

export default function OldSchoolSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-highscores" />;
}
