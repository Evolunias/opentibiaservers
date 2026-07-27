import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-latin-america');
}

export default function CanobPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-latin-america" />;
}
