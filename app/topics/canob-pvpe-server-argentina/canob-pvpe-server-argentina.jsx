import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-argentina');
}

export default function CanobPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-argentina" />;
}
