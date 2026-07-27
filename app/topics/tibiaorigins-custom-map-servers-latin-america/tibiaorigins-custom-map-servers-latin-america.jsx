import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-latin-america');
}

export default function TibiaoriginsCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-latin-america" />;
}
