import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-chile');
}

export default function CanobFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-chile" />;
}
