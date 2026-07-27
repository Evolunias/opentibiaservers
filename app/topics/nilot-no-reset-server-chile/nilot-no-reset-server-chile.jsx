import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-chile');
}

export default function NilotNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-chile" />;
}
