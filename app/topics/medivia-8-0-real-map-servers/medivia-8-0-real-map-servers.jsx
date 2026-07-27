import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-real-map-servers');
}

export default function Medivia80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-real-map-servers" />;
}
