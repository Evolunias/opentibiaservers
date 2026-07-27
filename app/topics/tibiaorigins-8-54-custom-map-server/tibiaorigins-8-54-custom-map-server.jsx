import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-custom-map-server');
}

export default function Tibiaorigins854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-custom-map-server" />;
}
