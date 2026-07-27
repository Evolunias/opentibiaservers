import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-custom-map-servers');
}

export default function Neprenia100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-custom-map-servers" />;
}
