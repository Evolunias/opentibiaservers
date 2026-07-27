import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-south-america');
}

export default function RealeraCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-south-america" />;
}
