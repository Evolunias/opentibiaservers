import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map');
}

export default function CoxaotRealMapKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map" />;
}
