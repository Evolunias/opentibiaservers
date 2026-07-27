import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-germany');
}

export default function CanobPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-germany" />;
}
