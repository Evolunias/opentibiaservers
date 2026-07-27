import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-chile');
}

export default function ThorniaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-chile" />;
}
