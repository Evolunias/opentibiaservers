import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-argentina');
}

export default function PvpeOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-argentina" />;
}
