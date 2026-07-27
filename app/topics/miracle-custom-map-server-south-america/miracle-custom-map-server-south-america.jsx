import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-south-america');
}

export default function MiracleCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-south-america" />;
}
