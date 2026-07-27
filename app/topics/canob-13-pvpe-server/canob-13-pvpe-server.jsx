import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-pvpe-server');
}

export default function Canob13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-pvpe-server" />;
}
