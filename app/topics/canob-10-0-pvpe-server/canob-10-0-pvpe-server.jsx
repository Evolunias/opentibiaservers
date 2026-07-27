import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-pvpe-server');
}

export default function Canob100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-pvpe-server" />;
}
