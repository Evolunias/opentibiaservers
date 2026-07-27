import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-south-america');
}

export default function DuraOnlinePvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-south-america" />;
}
