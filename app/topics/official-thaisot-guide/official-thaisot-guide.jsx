import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-guide');
}

export default function OfficialThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-guide" />;
}
