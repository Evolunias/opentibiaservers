import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-guide');
}

export default function NewSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-guide" />;
}
