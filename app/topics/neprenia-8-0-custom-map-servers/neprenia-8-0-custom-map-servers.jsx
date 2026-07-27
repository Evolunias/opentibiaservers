import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-custom-map-servers');
}

export default function Neprenia80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-custom-map-servers" />;
}
