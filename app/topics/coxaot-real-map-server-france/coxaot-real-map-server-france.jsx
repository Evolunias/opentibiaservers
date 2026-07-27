import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-france');
}

export default function CoxaotRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-france" />;
}
