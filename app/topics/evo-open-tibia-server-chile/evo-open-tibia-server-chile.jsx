import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-chile');
}

export default function EvoOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-chile" />;
}
