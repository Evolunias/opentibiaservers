import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-custom-map-servers');
}

export default function Alastera13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-custom-map-servers" />;
}
