import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-pvpe-server');
}

export default function DuraOnline86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-pvpe-server" />;
}
