import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-mexico');
}

export default function TibiaoriginsCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-mexico" />;
}
