import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-custom-map-server');
}

export default function Blazera772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-custom-map-server" />;
}
