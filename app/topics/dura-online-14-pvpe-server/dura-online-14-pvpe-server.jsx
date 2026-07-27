import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-pvpe-server');
}

export default function DuraOnline14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-pvpe-server" />;
}
