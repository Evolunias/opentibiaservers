import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-mexico');
}

export default function CanobPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-mexico" />;
}
