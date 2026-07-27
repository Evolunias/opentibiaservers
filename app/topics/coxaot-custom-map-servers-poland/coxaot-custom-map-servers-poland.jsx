import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-poland');
}

export default function CoxaotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-poland" />;
}
