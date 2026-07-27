import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-mexico');
}

export default function CoxaotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-mexico" />;
}
