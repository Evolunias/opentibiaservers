import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-custom-map-server');
}

export default function Imperianic14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-custom-map-server" />;
}
