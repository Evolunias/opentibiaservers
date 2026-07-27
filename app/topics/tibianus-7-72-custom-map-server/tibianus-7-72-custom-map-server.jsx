import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-custom-map-server');
}

export default function Tibianus772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-custom-map-server" />;
}
