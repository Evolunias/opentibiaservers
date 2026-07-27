import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-98-custom-map-server');
}

export default function Oxygenot1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-98-custom-map-server" />;
}
