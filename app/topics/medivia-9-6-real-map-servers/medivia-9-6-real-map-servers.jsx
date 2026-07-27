import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-real-map-servers');
}

export default function Medivia96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-real-map-servers" />;
}
