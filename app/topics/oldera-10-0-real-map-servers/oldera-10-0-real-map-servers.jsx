import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-real-map-servers');
}

export default function Oldera100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-real-map-servers" />;
}
