import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-highscores');
}

export default function CurrentNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-highscores" />;
}
