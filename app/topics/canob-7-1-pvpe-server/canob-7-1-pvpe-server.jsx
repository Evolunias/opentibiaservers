import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-pvpe-server');
}

export default function Canob71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-pvpe-server" />;
}
