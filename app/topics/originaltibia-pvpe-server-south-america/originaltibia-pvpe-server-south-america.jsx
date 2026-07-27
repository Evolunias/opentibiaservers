import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-south-america');
}

export default function OriginaltibiaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-south-america" />;
}
