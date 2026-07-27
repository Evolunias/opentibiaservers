import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-highscores');
}

export default function TopNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-highscores" />;
}
