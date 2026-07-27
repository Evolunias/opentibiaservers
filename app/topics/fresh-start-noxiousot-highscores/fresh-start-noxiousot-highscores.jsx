import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-highscores');
}

export default function FreshStartNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-highscores" />;
}
