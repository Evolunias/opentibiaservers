import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-usa');
}

export default function CanobBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-usa" />;
}
