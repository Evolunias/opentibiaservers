import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-chile');
}

export default function NepreniaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-chile" />;
}
