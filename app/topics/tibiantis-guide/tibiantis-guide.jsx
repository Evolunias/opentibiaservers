import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-guide');
}

export default function TibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-guide" />;
}
