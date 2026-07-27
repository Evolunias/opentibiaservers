import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-pvpe-server');
}

export default function DuraOnline15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-pvpe-server" />;
}
