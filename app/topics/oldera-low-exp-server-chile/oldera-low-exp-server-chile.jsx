import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-chile');
}

export default function OlderaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-chile" />;
}
