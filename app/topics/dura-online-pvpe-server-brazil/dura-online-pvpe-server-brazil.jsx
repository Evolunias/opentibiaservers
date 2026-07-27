import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-brazil');
}

export default function DuraOnlinePvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-brazil" />;
}
