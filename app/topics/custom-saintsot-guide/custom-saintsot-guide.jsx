import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-guide');
}

export default function CustomSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-guide" />;
}
