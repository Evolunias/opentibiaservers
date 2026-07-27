import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-highscores');
}

export default function LowrateBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-highscores" />;
}
