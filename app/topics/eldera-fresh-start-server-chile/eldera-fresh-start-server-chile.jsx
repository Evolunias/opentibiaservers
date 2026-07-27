import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-chile');
}

export default function ElderaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-chile" />;
}
