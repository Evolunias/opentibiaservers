import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-guide');
}

export default function LowrateSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-guide" />;
}
