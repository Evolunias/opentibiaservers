import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-map');
}

export default function CoxaotMapKeywordPage() {
  return <StaticKeywordPage slug="coxaot-map" />;
}
