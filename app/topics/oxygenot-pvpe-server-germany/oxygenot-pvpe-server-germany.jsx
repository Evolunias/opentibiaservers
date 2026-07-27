import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-germany');
}

export default function OxygenotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-germany" />;
}
