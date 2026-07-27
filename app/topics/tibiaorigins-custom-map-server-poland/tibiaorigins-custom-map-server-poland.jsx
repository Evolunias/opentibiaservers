import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-poland');
}

export default function TibiaoriginsCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-poland" />;
}
