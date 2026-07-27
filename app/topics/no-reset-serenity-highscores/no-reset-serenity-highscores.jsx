import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-highscores');
}

export default function NoResetSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-highscores" />;
}
