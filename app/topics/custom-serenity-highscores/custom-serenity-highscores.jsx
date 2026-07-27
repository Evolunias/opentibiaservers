import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-highscores');
}

export default function CustomSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-highscores" />;
}
