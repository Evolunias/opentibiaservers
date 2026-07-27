import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-custom-map-servers');
}

export default function Medivia80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-custom-map-servers" />;
}
