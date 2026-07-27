import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-brazil');
}

export default function FreshStartStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-brazil" />;
}
