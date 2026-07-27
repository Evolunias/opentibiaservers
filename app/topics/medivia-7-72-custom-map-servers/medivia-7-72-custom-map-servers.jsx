import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-custom-map-servers');
}

export default function Medivia772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-custom-map-servers" />;
}
