import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-guide');
}

export default function OfficialEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-guide" />;
}
