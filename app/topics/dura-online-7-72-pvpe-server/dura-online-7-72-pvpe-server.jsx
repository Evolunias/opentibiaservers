import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-72-pvpe-server');
}

export default function DuraOnline772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-72-pvpe-server" />;
}
