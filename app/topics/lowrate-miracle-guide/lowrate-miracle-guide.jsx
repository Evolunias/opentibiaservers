import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-guide');
}

export default function LowrateMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-guide" />;
}
