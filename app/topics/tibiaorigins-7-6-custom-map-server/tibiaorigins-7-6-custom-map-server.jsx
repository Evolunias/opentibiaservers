import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-custom-map-server');
}

export default function Tibiaorigins76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-custom-map-server" />;
}
