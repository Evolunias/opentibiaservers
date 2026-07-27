import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-custom-map-server');
}

export default function Neprenia84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-custom-map-server" />;
}
