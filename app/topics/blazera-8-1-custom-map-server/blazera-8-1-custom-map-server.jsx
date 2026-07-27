import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-custom-map-server');
}

export default function Blazera81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-custom-map-server" />;
}
