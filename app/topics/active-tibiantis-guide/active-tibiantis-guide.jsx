import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-guide');
}

export default function ActiveTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-guide" />;
}
