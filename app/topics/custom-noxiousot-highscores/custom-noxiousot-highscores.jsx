import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-highscores');
}

export default function CustomNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-highscores" />;
}
