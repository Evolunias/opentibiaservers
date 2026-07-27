import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-guide');
}

export default function FreshStartSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-guide" />;
}
