import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-latin-america');
}

export default function ElderaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-latin-america" />;
}
