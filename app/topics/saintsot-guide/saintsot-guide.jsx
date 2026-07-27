import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-guide');
}

export default function SaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="saintsot-guide" />;
}
