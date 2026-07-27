import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-chile');
}

export default function CoxaotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-chile" />;
}
