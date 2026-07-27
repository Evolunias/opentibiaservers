import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-germany');
}

export default function TibiaoriginsCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-germany" />;
}
