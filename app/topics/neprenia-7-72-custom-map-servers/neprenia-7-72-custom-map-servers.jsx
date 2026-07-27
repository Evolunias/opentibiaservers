import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-custom-map-servers');
}

export default function Neprenia772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-custom-map-servers" />;
}
