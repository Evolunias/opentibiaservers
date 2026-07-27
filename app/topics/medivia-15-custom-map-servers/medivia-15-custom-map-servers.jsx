import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-custom-map-servers');
}

export default function Medivia15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-custom-map-servers" />;
}
