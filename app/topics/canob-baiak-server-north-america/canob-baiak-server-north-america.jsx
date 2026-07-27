import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-north-america');
}

export default function CanobBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-north-america" />;
}
