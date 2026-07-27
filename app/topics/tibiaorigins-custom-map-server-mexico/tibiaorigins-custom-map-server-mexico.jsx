import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-mexico');
}

export default function TibiaoriginsCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-mexico" />;
}
