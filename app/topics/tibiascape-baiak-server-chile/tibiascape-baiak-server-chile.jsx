import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-chile');
}

export default function TibiascapeBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-chile" />;
}
