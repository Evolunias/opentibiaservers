import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-highscores');
}

export default function NoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-highscores" />;
}
