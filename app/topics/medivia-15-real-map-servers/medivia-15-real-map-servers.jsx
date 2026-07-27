import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-real-map-servers');
}

export default function Medivia15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-real-map-servers" />;
}
