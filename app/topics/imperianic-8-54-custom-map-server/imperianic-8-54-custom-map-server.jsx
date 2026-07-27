import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-54-custom-map-server');
}

export default function Imperianic854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-54-custom-map-server" />;
}
