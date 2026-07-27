import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-guide');
}

export default function OfficialRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="official-realera-guide" />;
}
