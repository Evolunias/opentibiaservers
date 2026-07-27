import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-europe');
}

export default function TibiaoriginsCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-europe" />;
}
