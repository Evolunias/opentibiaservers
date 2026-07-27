import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-custom-map-server');
}

export default function Blazera11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-custom-map-server" />;
}
