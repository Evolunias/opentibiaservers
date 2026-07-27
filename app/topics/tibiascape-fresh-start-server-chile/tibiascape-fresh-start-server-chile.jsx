import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-chile');
}

export default function TibiascapeFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-chile" />;
}
