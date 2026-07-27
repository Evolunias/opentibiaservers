import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-highscores');
}

export default function OfficialTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-highscores" />;
}
