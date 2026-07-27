import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-south-america');
}

export default function LumineraRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-south-america" />;
}
