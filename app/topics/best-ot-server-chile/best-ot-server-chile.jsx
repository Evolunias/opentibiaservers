import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-chile');
}

export default function BestOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-chile" />;
}
