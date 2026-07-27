import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-highscores');
}

export default function OfficialBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-highscores" />;
}
