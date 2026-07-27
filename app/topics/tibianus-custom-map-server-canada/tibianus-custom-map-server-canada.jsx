import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-canada');
}

export default function TibianusCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-canada" />;
}
