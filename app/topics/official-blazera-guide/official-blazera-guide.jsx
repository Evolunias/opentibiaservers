import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-guide');
}

export default function OfficialBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-guide" />;
}
