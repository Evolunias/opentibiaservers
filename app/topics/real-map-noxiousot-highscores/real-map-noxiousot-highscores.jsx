import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-highscores');
}

export default function RealMapNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-highscores" />;
}
