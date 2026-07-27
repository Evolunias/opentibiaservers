import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-south-america');
}

export default function KasteriaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-south-america" />;
}
