import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-france');
}

export default function TibiaoriginsCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-france" />;
}
