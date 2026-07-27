import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-custom-map-servers');
}

export default function Alastera11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-custom-map-servers" />;
}
