import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-chile');
}

export default function RealeraNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-chile" />;
}
