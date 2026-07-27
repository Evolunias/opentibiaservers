import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-chile');
}

export default function TibijkaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-chile" />;
}
