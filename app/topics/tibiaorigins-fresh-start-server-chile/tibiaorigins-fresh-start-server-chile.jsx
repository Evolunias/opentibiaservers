import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-chile');
}

export default function TibiaoriginsFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-chile" />;
}
