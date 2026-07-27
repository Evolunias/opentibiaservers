import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-chile');
}

export default function CoxaotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-chile" />;
}
