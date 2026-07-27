import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-custom-map-servers');
}

export default function Medivia13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-custom-map-servers" />;
}
