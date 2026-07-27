import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-highscores');
}

export default function RealMapSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-highscores" />;
}
