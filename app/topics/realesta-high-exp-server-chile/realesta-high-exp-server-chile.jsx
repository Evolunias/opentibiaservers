import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-chile');
}

export default function RealestaHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-chile" />;
}
