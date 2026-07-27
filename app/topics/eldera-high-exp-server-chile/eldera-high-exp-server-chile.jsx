import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-chile');
}

export default function ElderaHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-chile" />;
}
