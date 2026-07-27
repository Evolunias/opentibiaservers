import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-custom-map-server');
}

export default function Neprenia14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-custom-map-server" />;
}
