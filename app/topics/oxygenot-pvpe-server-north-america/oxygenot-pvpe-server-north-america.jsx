import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-north-america');
}

export default function OxygenotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-north-america" />;
}
