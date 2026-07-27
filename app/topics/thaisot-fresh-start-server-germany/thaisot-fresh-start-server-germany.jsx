import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-germany');
}

export default function ThaisotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-germany" />;
}
