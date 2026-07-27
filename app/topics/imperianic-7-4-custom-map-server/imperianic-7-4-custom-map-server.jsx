import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-custom-map-server');
}

export default function Imperianic74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-custom-map-server" />;
}
