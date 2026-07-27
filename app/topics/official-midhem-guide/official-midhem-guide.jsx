import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-guide');
}

export default function OfficialMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-guide" />;
}
