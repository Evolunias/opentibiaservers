import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-custom-map-server');
}

export default function Neprenia100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-custom-map-server" />;
}
