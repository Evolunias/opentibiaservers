import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-guide');
}

export default function ActiveSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-guide" />;
}
