import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-chile');
}

export default function OxygenotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-chile" />;
}
