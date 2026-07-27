import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-argentina');
}

export default function TibiaoriginsCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-argentina" />;
}
