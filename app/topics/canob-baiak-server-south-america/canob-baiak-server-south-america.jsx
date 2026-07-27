import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-south-america');
}

export default function CanobBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-south-america" />;
}
