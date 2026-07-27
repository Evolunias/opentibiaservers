import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-canada');
}

export default function TibiaoriginsCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-canada" />;
}
