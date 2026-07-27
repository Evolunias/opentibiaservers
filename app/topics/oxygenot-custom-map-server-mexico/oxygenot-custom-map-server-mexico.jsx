import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-mexico');
}

export default function OxygenotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-mexico" />;
}
