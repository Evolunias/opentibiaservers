import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-brazil');
}

export default function UnlinePvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-brazil" />;
}
