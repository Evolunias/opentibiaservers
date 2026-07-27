import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-chile');
}

export default function MistOfDeathRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-chile" />;
}
