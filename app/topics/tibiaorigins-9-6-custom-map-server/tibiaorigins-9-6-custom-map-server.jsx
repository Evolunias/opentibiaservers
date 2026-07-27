import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-custom-map-server');
}

export default function Tibiaorigins96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-custom-map-server" />;
}
