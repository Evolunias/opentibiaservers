import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-canada');
}

export default function RealeraCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-canada" />;
}
