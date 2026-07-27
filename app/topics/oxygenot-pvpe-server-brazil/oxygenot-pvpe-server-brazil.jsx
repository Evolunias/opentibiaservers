import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-brazil');
}

export default function OxygenotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-brazil" />;
}
