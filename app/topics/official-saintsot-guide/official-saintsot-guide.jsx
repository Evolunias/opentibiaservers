import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-guide');
}

export default function OfficialSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-guide" />;
}
