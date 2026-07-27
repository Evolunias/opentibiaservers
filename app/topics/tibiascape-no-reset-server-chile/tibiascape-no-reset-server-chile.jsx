import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-chile');
}

export default function TibiascapeNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-chile" />;
}
