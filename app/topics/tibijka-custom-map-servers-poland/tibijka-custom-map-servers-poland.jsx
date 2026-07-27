import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-poland');
}

export default function TibijkaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-poland" />;
}
