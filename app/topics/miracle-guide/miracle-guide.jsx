import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-guide');
}

export default function MiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="miracle-guide" />;
}
