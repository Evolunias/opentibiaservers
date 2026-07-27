import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-canada');
}

export default function RealeraCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-canada" />;
}
