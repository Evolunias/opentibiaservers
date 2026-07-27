import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-canada');
}

export default function TibiaoriginsCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-canada" />;
}
