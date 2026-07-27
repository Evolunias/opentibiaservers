import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-98-custom-map-server');
}

export default function Imperianic1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-98-custom-map-server" />;
}
