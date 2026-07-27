import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-chile');
}

export default function ElderaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-chile" />;
}
