import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-canada');
}

export default function MiracleCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-canada" />;
}
