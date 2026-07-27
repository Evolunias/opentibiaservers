import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-highscores');
}

export default function OfficialSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-highscores" />;
}
