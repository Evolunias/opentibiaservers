import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-usa');
}

export default function TibiaoriginsCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-usa" />;
}
