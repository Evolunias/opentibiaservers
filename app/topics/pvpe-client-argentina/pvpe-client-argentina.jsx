import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-argentina');
}

export default function PvpeClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-argentina" />;
}
