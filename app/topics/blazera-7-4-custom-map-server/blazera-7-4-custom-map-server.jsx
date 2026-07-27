import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-custom-map-server');
}

export default function Blazera74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-custom-map-server" />;
}
