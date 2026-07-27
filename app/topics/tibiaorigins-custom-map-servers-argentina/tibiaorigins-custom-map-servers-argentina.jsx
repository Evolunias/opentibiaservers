import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-argentina');
}

export default function TibiaoriginsCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-argentina" />;
}
