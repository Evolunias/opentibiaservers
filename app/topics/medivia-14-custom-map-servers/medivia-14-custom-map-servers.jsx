import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-custom-map-servers');
}

export default function Medivia14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-custom-map-servers" />;
}
