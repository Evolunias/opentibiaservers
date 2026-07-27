import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-north-america');
}

export default function TibiaoriginsCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-north-america" />;
}
