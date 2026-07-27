import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-brazil');
}

export default function LumineraRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-brazil" />;
}
