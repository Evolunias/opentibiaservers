import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-sweden');
}

export default function CanobPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-sweden" />;
}
