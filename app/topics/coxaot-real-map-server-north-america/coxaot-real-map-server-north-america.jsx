import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-north-america');
}

export default function CoxaotRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-north-america" />;
}
