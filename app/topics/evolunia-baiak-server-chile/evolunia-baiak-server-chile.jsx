import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-chile');
}

export default function EvoluniaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-chile" />;
}
