import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-custom-map-servers');
}

export default function Alastera80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-custom-map-servers" />;
}
