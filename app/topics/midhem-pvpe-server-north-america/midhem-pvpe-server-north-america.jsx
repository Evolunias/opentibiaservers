import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-north-america');
}

export default function MidhemPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-north-america" />;
}
