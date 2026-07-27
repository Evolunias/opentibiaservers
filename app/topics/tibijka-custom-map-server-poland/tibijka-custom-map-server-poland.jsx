import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-poland');
}

export default function TibijkaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-poland" />;
}
