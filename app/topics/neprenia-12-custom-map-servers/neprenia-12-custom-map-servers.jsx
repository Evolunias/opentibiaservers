import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-custom-map-servers');
}

export default function Neprenia12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-custom-map-servers" />;
}
