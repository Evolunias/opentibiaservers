import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-south-america');
}

export default function LumineraCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-south-america" />;
}
