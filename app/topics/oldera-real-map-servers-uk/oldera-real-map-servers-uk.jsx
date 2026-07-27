import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-uk');
}

export default function OlderaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-uk" />;
}
