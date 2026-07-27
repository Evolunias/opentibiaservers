import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-calmera-ot-server');
}

export default function PvpeCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-calmera-ot-server" />;
}
