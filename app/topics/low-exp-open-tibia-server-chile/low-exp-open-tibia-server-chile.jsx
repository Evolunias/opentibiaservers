import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-chile');
}

export default function LowExpOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-chile" />;
}
