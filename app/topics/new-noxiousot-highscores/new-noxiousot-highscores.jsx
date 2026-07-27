import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-highscores');
}

export default function NewNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-highscores" />;
}
