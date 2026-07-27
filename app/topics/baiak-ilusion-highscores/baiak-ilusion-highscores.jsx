import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-highscores');
}

export default function BaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-highscores" />;
}
