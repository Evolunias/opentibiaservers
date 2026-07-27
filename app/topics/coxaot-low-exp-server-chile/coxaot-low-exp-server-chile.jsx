import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-chile');
}

export default function CoxaotLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-chile" />;
}
