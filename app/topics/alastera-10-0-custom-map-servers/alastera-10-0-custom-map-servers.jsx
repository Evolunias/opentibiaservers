import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-custom-map-servers');
}

export default function Alastera100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-custom-map-servers" />;
}
