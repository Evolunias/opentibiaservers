import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-north-america');
}

export default function ElderaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-north-america" />;
}
