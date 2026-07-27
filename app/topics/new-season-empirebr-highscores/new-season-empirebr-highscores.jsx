import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-highscores');
}

export default function NewSeasonEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-highscores" />;
}
