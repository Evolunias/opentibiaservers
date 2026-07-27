import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-highscores');
}

export default function OfficialCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-highscores" />;
}
