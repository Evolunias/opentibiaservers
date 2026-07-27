import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-real-map-servers');
}

export default function Medivia86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-real-map-servers" />;
}
