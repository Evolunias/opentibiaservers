import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-canada');
}

export default function TibianusCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-canada" />;
}
