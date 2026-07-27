import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-custom-map-server');
}

export default function Neprenia854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-custom-map-server" />;
}
