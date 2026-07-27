import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-south-america');
}

export default function OxygenotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-south-america" />;
}
