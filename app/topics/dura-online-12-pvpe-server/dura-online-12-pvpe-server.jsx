import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-pvpe-server');
}

export default function DuraOnline12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-pvpe-server" />;
}
