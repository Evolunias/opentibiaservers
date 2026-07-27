import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-guide');
}

export default function CustomTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-guide" />;
}
