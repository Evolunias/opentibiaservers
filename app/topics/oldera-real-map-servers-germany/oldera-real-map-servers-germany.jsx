import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-germany');
}

export default function OlderaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-germany" />;
}
