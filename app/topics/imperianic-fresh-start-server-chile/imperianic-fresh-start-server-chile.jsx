import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-chile');
}

export default function ImperianicFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-chile" />;
}
