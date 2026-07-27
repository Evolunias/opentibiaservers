import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-south-america');
}

export default function MiracleCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-south-america" />;
}
