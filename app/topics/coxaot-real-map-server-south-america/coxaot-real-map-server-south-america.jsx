import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-south-america');
}

export default function CoxaotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-south-america" />;
}
