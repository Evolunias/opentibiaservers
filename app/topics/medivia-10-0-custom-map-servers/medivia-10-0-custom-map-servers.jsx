import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-custom-map-servers');
}

export default function Medivia100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-custom-map-servers" />;
}
