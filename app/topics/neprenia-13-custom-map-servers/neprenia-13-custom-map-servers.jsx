import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-custom-map-servers');
}

export default function Neprenia13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-custom-map-servers" />;
}
