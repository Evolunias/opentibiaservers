import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-highscores');
}

export default function ActiveSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-highscores" />;
}
