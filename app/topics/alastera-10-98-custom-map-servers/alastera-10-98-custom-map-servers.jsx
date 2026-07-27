import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-custom-map-servers');
}

export default function Alastera1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-custom-map-servers" />;
}
