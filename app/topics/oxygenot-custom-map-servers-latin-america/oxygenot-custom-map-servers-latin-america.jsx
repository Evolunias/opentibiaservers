import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-latin-america');
}

export default function OxygenotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-latin-america" />;
}
