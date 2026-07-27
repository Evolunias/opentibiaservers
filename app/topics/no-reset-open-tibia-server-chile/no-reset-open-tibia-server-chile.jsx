import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-chile');
}

export default function NoResetOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-chile" />;
}
