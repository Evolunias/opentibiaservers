import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-chile');
}

export default function ThorniaHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-chile" />;
}
