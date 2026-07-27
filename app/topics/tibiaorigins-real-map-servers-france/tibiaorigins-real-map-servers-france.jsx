import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-france');
}

export default function TibiaoriginsRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-france" />;
}
