import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-custom-map-servers');
}

export default function Neprenia1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-custom-map-servers" />;
}
