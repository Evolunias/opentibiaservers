import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-54-custom-map-server');
}

export default function Blazera854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-54-custom-map-server" />;
}
