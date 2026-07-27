import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-poland');
}

export default function TibijkaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-poland" />;
}
