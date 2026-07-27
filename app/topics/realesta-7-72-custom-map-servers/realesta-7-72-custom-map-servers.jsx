import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-custom-map-servers');
}

export default function Realesta772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-custom-map-servers" />;
}
