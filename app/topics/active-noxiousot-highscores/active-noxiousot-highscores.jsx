import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-highscores');
}

export default function ActiveNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-highscores" />;
}
