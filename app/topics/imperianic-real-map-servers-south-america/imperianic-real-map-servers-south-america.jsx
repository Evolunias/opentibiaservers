import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-south-america');
}

export default function ImperianicRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-south-america" />;
}
