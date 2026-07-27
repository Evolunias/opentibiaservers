import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-poland');
}

export default function CoxaotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-poland" />;
}
