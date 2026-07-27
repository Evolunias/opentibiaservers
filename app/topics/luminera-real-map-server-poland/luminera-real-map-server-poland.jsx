import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-poland');
}

export default function LumineraRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-poland" />;
}
