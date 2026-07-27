import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-highscores');
}

export default function HighrateNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-highscores" />;
}
