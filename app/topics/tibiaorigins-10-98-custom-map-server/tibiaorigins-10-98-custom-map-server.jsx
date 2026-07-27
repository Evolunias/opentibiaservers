import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-98-custom-map-server');
}

export default function Tibiaorigins1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-98-custom-map-server" />;
}
