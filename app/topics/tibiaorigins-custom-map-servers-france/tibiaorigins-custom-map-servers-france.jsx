import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-france');
}

export default function TibiaoriginsCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-france" />;
}
