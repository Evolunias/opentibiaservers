import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-mexico');
}

export default function OxygenotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-mexico" />;
}
