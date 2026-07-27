import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-canada');
}

export default function CoxaotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-canada" />;
}
