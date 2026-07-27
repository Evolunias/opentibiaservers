import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-chile');
}

export default function TibiaraHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-chile" />;
}
