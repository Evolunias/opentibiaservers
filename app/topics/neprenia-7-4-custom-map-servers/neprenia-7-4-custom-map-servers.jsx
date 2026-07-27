import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-custom-map-servers');
}

export default function Neprenia74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-custom-map-servers" />;
}
