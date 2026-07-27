import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-custom-map-server');
}

export default function Neprenia12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-custom-map-server" />;
}
