import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-highscores');
}

export default function NoResetNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-highscores" />;
}
