import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-canada');
}

export default function MiracleCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-canada" />;
}
