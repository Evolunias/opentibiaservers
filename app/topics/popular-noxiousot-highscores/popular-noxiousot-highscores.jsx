import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-highscores');
}

export default function PopularNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-highscores" />;
}
