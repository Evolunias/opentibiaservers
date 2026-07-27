import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-canada');
}

export default function CanobBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-canada" />;
}
