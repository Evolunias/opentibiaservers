import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-chile');
}

export default function LumineraNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-chile" />;
}
