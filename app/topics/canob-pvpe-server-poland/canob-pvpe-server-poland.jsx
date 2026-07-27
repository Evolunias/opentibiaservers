import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-poland');
}

export default function CanobPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-poland" />;
}
