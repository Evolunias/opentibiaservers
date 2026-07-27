import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-south-america');
}

export default function ImperianicCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-south-america" />;
}
