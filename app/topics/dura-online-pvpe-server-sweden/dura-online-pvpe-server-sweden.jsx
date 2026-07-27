import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-sweden');
}

export default function DuraOnlinePvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-sweden" />;
}
