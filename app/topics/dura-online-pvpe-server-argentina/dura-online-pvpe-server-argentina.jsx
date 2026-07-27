import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-argentina');
}

export default function DuraOnlinePvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-argentina" />;
}
