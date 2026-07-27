import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-custom-map-server');
}

export default function Neprenia96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-custom-map-server" />;
}
