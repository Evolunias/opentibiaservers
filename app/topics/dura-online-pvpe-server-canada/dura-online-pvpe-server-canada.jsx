import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-canada');
}

export default function DuraOnlinePvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-canada" />;
}
