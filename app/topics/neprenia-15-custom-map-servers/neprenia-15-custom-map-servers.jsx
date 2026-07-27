import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-custom-map-servers');
}

export default function Neprenia15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-custom-map-servers" />;
}
