import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-south-america');
}

export default function BlazeraPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-south-america" />;
}
