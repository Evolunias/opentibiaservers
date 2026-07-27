import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-germany');
}

export default function CanobBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-germany" />;
}
