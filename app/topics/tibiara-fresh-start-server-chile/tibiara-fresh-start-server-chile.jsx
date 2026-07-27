import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-chile');
}

export default function TibiaraFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-chile" />;
}
