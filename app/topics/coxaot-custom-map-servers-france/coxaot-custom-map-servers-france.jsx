import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-france');
}

export default function CoxaotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-france" />;
}
