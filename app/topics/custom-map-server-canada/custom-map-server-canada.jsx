import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-canada');
}

export default function CustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-canada" />;
}
