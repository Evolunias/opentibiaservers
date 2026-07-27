import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-highscores');
}

export default function IridiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="iridia-highscores" />;
}
