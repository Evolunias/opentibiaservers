import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-custom-map-server');
}

export default function Tibiaorigins12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-custom-map-server" />;
}
