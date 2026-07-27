import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-chile');
}

export default function HighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-chile" />;
}
