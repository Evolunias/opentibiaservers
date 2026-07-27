import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-poland');
}

export default function OlderaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-poland" />;
}
