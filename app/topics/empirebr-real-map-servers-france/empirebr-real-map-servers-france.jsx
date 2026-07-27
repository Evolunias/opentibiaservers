import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-france');
}

export default function EmpirebrRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-france" />;
}
