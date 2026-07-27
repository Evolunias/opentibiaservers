import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-south-america');
}

export default function ThorniaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-south-america" />;
}
