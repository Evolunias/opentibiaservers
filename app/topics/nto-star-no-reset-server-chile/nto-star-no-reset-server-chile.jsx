import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-chile');
}

export default function NtoStarNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-chile" />;
}
