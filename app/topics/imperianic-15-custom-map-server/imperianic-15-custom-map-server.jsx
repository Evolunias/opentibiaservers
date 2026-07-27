import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-custom-map-server');
}

export default function Imperianic15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-custom-map-server" />;
}
