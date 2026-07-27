import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-germany');
}

export default function TibijkaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-germany" />;
}
