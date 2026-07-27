import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-chile');
}

export default function CoxaotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-chile" />;
}
