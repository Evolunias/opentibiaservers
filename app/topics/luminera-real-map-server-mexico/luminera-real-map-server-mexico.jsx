import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-mexico');
}

export default function LumineraRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-mexico" />;
}
