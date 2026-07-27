import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-mexico');
}

export default function PvpeOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-mexico" />;
}
