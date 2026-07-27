import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-chile');
}

export default function CoxaotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-chile" />;
}
