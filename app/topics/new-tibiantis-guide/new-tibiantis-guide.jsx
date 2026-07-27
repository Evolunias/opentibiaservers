import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-guide');
}

export default function NewTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-guide" />;
}
