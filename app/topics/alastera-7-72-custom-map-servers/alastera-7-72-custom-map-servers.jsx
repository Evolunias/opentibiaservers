import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-custom-map-servers');
}

export default function Alastera772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-custom-map-servers" />;
}
