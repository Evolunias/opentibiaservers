import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-custom-map-server');
}

export default function Blazera1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-custom-map-server" />;
}
