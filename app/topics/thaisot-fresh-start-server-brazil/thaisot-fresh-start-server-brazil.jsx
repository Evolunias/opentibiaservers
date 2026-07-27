import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-brazil');
}

export default function ThaisotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-brazil" />;
}
