import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-chile');
}

export default function MidhemNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-chile" />;
}
