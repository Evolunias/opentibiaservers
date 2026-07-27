import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-highscores');
}

export default function LowrateSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-highscores" />;
}
