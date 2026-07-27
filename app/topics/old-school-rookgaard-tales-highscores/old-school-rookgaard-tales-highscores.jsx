import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-highscores');
}

export default function OldSchoolRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-highscores" />;
}
