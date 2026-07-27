import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-highscores');
}

export default function NoResetTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-highscores" />;
}
