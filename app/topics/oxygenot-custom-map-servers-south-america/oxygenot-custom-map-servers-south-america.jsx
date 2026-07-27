import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-south-america');
}

export default function OxygenotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-south-america" />;
}
