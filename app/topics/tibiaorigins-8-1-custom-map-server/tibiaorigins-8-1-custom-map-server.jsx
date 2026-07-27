import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-custom-map-server');
}

export default function Tibiaorigins81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-custom-map-server" />;
}
