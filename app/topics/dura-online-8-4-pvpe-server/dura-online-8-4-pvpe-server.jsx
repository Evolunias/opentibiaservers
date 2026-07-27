import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-4-pvpe-server');
}

export default function DuraOnline84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-4-pvpe-server" />;
}
