import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-france');
}

export default function CoxaotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-france" />;
}
