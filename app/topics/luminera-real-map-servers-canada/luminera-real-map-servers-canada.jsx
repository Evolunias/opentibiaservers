import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-canada');
}

export default function LumineraRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-canada" />;
}
