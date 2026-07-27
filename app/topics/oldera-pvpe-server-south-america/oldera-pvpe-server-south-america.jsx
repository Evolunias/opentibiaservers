import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-south-america');
}

export default function OlderaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-south-america" />;
}
