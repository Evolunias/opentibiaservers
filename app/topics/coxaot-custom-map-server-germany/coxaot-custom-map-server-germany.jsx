import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-germany');
}

export default function CoxaotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-germany" />;
}
