import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-brazil');
}

export default function PvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-brazil" />;
}
