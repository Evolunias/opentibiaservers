import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-custom-map-server');
}

export default function Blazera76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-custom-map-server" />;
}
