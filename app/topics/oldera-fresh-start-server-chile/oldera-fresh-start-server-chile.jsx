import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-chile');
}

export default function OlderaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-chile" />;
}
