import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-highscores');
}

export default function OfficialNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-highscores" />;
}
