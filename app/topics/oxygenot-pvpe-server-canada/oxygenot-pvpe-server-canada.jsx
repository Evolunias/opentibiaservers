import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-canada');
}

export default function OxygenotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-canada" />;
}
