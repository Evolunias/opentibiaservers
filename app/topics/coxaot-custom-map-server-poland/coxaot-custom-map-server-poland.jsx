import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-poland');
}

export default function CoxaotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-poland" />;
}
