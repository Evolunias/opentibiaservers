import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-guide');
}

export default function NewNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-guide" />;
}
