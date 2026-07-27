import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-guide');
}

export default function OfficialUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="official-unline-guide" />;
}
