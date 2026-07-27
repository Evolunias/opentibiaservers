import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-usa');
}

export default function OxygenotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-usa" />;
}
