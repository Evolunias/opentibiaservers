import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-chile');
}

export default function TibiaraLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-chile" />;
}
