import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-chile');
}

export default function FreshStartOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-chile" />;
}
