import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-pvpe-server');
}

export default function DuraOnline11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-pvpe-server" />;
}
