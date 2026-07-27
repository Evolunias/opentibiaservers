import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-guide');
}

export default function NewKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-guide" />;
}
