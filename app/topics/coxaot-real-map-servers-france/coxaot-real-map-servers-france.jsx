import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-france');
}

export default function CoxaotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-france" />;
}
