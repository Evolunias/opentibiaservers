import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-chile');
}

export default function CoxaotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-chile" />;
}
