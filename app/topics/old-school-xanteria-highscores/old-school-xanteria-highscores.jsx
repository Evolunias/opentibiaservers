import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-highscores');
}

export default function OldSchoolXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-highscores" />;
}
