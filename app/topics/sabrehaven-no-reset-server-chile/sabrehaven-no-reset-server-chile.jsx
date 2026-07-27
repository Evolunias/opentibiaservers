import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-chile');
}

export default function SabrehavenNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-chile" />;
}
