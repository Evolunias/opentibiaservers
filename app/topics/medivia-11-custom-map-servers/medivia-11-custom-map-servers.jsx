import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-custom-map-servers');
}

export default function Medivia11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-custom-map-servers" />;
}
