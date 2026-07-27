import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-germany');
}

export default function CoxaotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-germany" />;
}
