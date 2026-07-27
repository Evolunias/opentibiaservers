import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-south-america');
}

export default function CoxaotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-south-america" />;
}
