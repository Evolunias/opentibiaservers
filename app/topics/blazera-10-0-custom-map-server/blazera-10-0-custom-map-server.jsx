import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-custom-map-server');
}

export default function Blazera100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-custom-map-server" />;
}
