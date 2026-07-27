import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-france');
}

export default function PvpeOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-france" />;
}
