import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-custom-map-servers');
}

export default function Medivia76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-custom-map-servers" />;
}
