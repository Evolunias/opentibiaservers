import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-highscores');
}

export default function CustomEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-highscores" />;
}
