import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-guide');
}

export default function OfficialOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-guide" />;
}
