import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-brazil');
}

export default function NilotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-brazil" />;
}
