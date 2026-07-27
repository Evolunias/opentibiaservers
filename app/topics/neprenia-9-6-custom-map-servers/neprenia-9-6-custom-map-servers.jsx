import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-custom-map-servers');
}

export default function Neprenia96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-custom-map-servers" />;
}
