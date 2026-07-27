import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-brazil');
}

export default function CanobBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-brazil" />;
}
