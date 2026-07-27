import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-north-america');
}

export default function TibiaoriginsCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-north-america" />;
}
