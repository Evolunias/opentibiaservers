import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-chile');
}

export default function ThorniaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-chile" />;
}
