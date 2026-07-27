import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-highscores');
}

export default function NoResetEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-highscores" />;
}
