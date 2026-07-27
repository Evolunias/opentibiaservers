import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-highscores');
}

export default function NewEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-highscores" />;
}
