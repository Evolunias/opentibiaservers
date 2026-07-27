import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-chile');
}

export default function CoxaotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-chile" />;
}
