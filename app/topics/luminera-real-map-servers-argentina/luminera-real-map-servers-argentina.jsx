import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-argentina');
}

export default function LumineraRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-argentina" />;
}
