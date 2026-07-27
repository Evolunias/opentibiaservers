import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-france');
}

export default function EmpirebrCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-france" />;
}
