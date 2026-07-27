import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-custom-map-servers');
}

export default function Medivia96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-custom-map-servers" />;
}
