import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-real-map-servers');
}

export default function Medivia13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-real-map-servers" />;
}
