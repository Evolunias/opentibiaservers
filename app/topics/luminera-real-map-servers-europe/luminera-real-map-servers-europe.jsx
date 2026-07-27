import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-europe');
}

export default function LumineraRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-europe" />;
}
