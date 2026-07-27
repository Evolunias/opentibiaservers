import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-highscores');
}

export default function ObsidiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="obsidia-highscores" />;
}
