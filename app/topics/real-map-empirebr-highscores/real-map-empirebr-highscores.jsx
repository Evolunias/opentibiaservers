import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-highscores');
}

export default function RealMapEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-highscores" />;
}
