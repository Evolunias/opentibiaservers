import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-brazil');
}

export default function TibijkaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-brazil" />;
}
