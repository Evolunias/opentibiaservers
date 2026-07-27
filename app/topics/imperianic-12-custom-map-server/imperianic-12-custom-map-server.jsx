import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-custom-map-server');
}

export default function Imperianic12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-custom-map-server" />;
}
