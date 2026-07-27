import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-chile');
}

export default function HighExpOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-chile" />;
}
