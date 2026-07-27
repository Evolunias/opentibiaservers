import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-north-america');
}

export default function OxygenotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-north-america" />;
}
