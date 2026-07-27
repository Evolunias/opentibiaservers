import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-south-america');
}

export default function UnlinePvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-south-america" />;
}
