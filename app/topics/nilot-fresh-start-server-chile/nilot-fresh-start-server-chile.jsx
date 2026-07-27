import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-chile');
}

export default function NilotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-chile" />;
}
