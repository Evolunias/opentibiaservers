import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-highscores');
}

export default function CustomDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-highscores" />;
}
