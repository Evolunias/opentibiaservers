import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-uk');
}

export default function LumineraRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-uk" />;
}
