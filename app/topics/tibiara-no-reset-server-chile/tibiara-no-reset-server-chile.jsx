import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-chile');
}

export default function TibiaraNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-chile" />;
}
