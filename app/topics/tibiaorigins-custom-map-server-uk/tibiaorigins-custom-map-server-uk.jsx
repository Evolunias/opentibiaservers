import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-uk');
}

export default function TibiaoriginsCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-uk" />;
}
