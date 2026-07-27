import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-chile');
}

export default function TibiantisBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-chile" />;
}
