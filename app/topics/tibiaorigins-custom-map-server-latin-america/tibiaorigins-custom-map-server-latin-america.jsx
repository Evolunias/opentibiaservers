import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-latin-america');
}

export default function TibiaoriginsCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-latin-america" />;
}
