import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiaorigins-servers');
}

export default function CustomMapTibiaoriginsServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiaorigins-servers" />;
}
