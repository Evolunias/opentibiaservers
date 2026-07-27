import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-france');
}

export default function EmpirebrRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-france" />;
}
