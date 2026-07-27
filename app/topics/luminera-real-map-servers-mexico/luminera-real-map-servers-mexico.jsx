import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-mexico');
}

export default function LumineraRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-mexico" />;
}
