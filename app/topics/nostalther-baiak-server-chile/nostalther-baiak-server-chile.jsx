import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-chile');
}

export default function NostaltherBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-chile" />;
}
