import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-guide');
}

export default function CurrentSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-guide" />;
}
