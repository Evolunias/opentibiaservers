import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-usa');
}

export default function DuraOnlinePvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-usa" />;
}
