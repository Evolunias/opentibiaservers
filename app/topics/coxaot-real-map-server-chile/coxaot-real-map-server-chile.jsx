import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-chile');
}

export default function CoxaotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-chile" />;
}
