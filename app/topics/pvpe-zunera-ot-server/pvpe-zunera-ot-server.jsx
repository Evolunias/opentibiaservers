import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-zunera-ot-server');
}

export default function PvpeZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-zunera-ot-server" />;
}
