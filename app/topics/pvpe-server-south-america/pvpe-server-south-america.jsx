import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-south-america');
}

export default function PvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-south-america" />;
}
