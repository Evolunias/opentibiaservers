import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-brazil');
}

export default function LumineraRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-brazil" />;
}
