import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-latin-america');
}

export default function OxygenotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-latin-america" />;
}
