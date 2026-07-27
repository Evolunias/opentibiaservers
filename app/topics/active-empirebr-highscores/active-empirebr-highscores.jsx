import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-highscores');
}

export default function ActiveEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-highscores" />;
}
