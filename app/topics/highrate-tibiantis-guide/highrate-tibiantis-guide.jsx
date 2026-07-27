import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-guide');
}

export default function HighrateTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-guide" />;
}
