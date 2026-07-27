import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-pvpe-server');
}

export default function Canob74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-pvpe-server" />;
}
