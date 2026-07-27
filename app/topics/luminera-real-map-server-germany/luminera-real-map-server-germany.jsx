import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-germany');
}

export default function LumineraRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-germany" />;
}
