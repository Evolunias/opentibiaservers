import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiaorigins-server');
}

export default function CustomMapTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiaorigins-server" />;
}
