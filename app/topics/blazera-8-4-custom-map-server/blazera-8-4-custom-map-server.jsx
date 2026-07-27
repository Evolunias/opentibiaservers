import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-custom-map-server');
}

export default function Blazera84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-custom-map-server" />;
}
