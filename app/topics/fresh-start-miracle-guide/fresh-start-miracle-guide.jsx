import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-guide');
}

export default function FreshStartMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-guide" />;
}
