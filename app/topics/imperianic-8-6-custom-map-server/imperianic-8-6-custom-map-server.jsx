import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-custom-map-server');
}

export default function Imperianic86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-custom-map-server" />;
}
