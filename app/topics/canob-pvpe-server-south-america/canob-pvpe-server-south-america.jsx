import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-south-america');
}

export default function CanobPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-south-america" />;
}
