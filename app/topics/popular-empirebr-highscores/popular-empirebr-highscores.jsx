import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-highscores');
}

export default function PopularEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-highscores" />;
}
