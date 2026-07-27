import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-custom-map-servers');
}

export default function Alastera84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-custom-map-servers" />;
}
