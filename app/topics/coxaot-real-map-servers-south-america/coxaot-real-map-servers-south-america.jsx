import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-south-america');
}

export default function CoxaotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-south-america" />;
}
