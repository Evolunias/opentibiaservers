import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-highscores');
}

export default function BestNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-highscores" />;
}
