import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-south-america');
}

export default function TibiaoriginsCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-south-america" />;
}
