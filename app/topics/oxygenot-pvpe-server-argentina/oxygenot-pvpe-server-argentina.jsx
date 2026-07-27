import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-argentina');
}

export default function OxygenotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-argentina" />;
}
