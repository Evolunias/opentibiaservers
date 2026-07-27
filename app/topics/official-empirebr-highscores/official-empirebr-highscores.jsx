import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-highscores');
}

export default function OfficialEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-highscores" />;
}
