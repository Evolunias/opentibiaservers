import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-chile');
}

export default function MistOfDeathRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-chile" />;
}
