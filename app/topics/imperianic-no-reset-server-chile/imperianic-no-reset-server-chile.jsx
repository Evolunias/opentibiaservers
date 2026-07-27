import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-chile');
}

export default function ImperianicNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-chile" />;
}
