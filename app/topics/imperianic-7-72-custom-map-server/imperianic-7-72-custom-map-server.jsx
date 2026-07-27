import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-72-custom-map-server');
}

export default function Imperianic772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-72-custom-map-server" />;
}
