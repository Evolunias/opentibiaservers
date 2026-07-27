import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-custom-map-servers');
}

export default function Alastera96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-custom-map-servers" />;
}
