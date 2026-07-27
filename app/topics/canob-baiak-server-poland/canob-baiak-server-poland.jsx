import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-poland');
}

export default function CanobBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-poland" />;
}
