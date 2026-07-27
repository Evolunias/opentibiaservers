import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-highscores');
}

export default function NewSeasonNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-highscores" />;
}
