import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-custom-map-server');
}

export default function Imperianic96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-custom-map-server" />;
}
