import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-highscores');
}

export default function LowrateNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-highscores" />;
}
