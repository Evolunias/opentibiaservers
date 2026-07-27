import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-brazil');
}

export default function PvpeClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-brazil" />;
}
